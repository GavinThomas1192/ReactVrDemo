import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Image,
  Box
} from 'react-vr';
import Walk from 'react-vr-walk'
export default class ReactVrDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showBox: false,
      height: 1,
      width: 2,
      depth: 2
    }
    this._onViewClicked = this._onViewClicked.bind(this);
    this.onBoxClick = this.onBoxClick.bind(this);
  }

  _onViewClicked() {
    alert('hol')
    this.setState({ showBox: !this.state.showBox })
  }

  onBoxClick() {
    this.setState({ height: (Math.floor(Math.random() * 5) + 1), width: (Math.floor(Math.random() * 5) + 1), depth: (Math.floor(Math.random() * 5) + 1), })
  }
  render() {
    return (
      <View>
        <Walk panoSource={asset('chess-world.jpg')}
          speed={5}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>Hey!</Text>
          </View>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translate: [0, 0, -3] }],
            }}>
            Hi Scott.
        </Text>
          {this.state.showBox ? <Box
            lit={true}
            dimWidth={this.state.width}
            dimDepth={this.state.depth}
            dimHeight={this.state.height}
            style={{ transform: [{ translate: [2, 2, -3] }], color: 'black' }}
            onClick={this.onBoxClick}
          /> : undefined}
          <VrButton
            style={{ width: 0.7, layoutOrigin: [-1, -1], transform: [{ translate: [0, 0, -3] }], backgroundColor: 'black', }}
            onClick={this._onViewClicked}>
            <Text> Contact Me</Text>
          </VrButton>
          <VrButton
            style={{ width: 0.7, layoutOrigin: [3, 15], transform: [{ translate: [0, 0, -3] }], backgroundColor: 'black', }}
            onClick={this.onBoxClick}>
            <Text> Manipulate me =></Text>
          </VrButton>
        </Walk>
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVrDemo', () => ReactVrDemo);
{/* <Pano source={asset('chess-world.jpg')} style={{ width: 1, height: 1 }} />*/ }
