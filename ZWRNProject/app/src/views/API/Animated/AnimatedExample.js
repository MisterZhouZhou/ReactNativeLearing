import React, {Component} from 'react';
import {Animated, Text, PanResponder, View, StyleSheet, TouchableHighlight, Easing} from 'react-native';

// 渐变 + 移动
class FadeInView extends Component {
   constructor(props) {
     super(props);
     this.state = {
       fadeAnim: new Animated.Value(0), // init opacity 0
     };
   }
   componentDidMount() {
     Animated.timing(          // Uses easing functions
       this.state.fadeAnim,    // The value to drive
       {toValue: 1},           // Configuration
     ).start();                // Don't forget start!
   }

   render() {
     return (
       <Animated.View          // Special animatable View
         style={{
          opacity: this.state.fadeAnim,
          transform:[{
            translateY: this.state.fadeAnim.interpolate({
              inputRange:[0,1],
              outputRange:[150,0]
            })
          }]
         }}>
         {this.props.children}
       </Animated.View>
     );
   }
 }

// 拖动
class DraggableView extends Component{
  constructor(props){
    super(props);
    this.state={
      pan: new Animated.ValueXY(),
    }

    this.state.panResponder = PanResponder.create({
       onStartShouldSetPanResponder: () => true,
       onPanResponderMove: Animated.event([null, {
         dx: this.state.pan.x, // x,y are Animated.Value
         dy: this.state.pan.y,
       }]),
       onPanResponderRelease: () => {
         Animated.spring(
           this.state.pan,         // Auto-multiplexed
           {toValue: {x: 0, y: 0}} // Back to zero
         ).start();
       },
    });
  }
   render() {
     return (
       <Animated.View
         {...this.state.panResponder.panHandlers}
         style={this.state.pan.getLayout()}>
         {this.props.children}
       </Animated.View>
     );
   }

}

exports.framework = 'React';
exports.title = 'Alert Example';
exports.description = 'Example of using the Alert support API.';
exports.examples = [
  {
    title: 'FadeInView Animated',
    render() {
      return(
        <FadeInView>
          <Text style={{width:50,height:50,backgroundColor:'red'}}>FadeInView Animated</Text>
        </FadeInView>
      );
    }
  },
  {
    title: 'DraggableView Animated',
    render() {
      return(
        <DraggableView>
          <Text style={{width:50,height:50,backgroundColor:'red'}}>DraggableView Animated</Text>
        </DraggableView>
      );
    }
  },
  {
    title: 'Transform Bounce',
    description: 'One `Animated.Value` is driven by a ' +
      'spring with custom constants and mapped to an ' +
      'ordered set of transforms.  Each transform has ' +
      'an interpolation to convert the value into the ' +
      'right range and units.',
    render: function() {
      this.anim = this.anim || new Animated.Value(0);
      return (
        <View>
          <Text onPress={() => {
            Animated.spring(this.anim, {
              toValue: 0,   // Returns to the start
              velocity: 3,  // Velocity makes it move
              tension: -20, // Slow
              friction: 1,  // Oscillate a lot
            }).start(); }}>
            Press to Fling it!
          </Text>
          <Animated.View
            style={[styles.content, {
              transform: [   // Array order matters
                {scale: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 4],
                })},
                {translateX: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 500],
                })},
                {rotate: this.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    '0deg', '360deg' // 'deg' or 'rad'
                  ],
                })},
              ]}
            ]}>
            <Text>Transforms!</Text>
          </Animated.View>
        </View>
      );
    }
  },
  {
    title: 'Composite Animations with Easing',
    description: 'Sequence, parallel, delay, and ' +
      'stagger with different easing functions.',
    render: function() {
      this.anims = this.anims || [1,2,3].map(
        () => new Animated.Value(0)
      );
      return (
        <View>
          <Text onPress={() => {
            var timing = Animated.timing;
            Animated.sequence([ // One after the other
              timing(this.anims[0], {
                toValue: 200,
                easing: Easing.linear,
              }),
              Animated.delay(400), // Use with sequence
              timing(this.anims[0], {
                toValue: 0,
                easing: Easing.elastic(2), // Springy
              }),
              Animated.delay(400),
              Animated.stagger(200,
                this.anims.map((anim) => timing(
                  anim, {toValue: 200}
                )).concat(
                this.anims.map((anim) => timing(
                  anim, {toValue: 0}
                ))),
              ),
              Animated.delay(400),
              Animated.parallel([
                Easing.inOut(Easing.quad), // Symmetric
                Easing.back(1.5),  // Goes backwards first
                Easing.ease        // Default bezier
              ].map((easing, ii) => (
                timing(this.anims[ii], {
                  toValue: 320, easing, duration: 3000,
                })
              ))),
              Animated.delay(400),
              Animated.stagger(200,
                this.anims.map((anim) => timing(anim, {
                  toValue: 0,
                  easing: Easing.bounce, // Like a ball
                  duration: 2000,
                })),
              ),
            ]).start(); }}>
            Press to Animate
          </Text>
          {['Composite', 'Easing', 'Animations!'].map(
            (text, ii) => (
              <Animated.View
                key={text}
                style={[styles.content, {
                  left: this.anims[ii]
                }]}>
                <Text>{text}</Text>
              </Animated.View>
            )
          )}
        </View>
      );
    },
  }
]

var styles = StyleSheet.create({
  content: {
    backgroundColor: 'deepskyblue',
    borderWidth: 1,
    borderColor: 'dodgerblue',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});
