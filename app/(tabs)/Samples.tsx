import { View, FlatList, Dimensions, TouchableWithoutFeedback } from 'react-native';
import React, { useRef, useState } from 'react';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import SamplesData from '@/Data/SamplesData';

// this screen code has been gerated using the chat gpt

const { height } = Dimensions.get('window');

const VideoItem = ({ item, index, currentIndex }) => {
  const player = useVideoPlayer(item.videoUrl, (instance) => {
    instance.loop = true; // Allow looping
    if (index === currentIndex) instance.play(); // Autoplay when visible
  });

  // Track play/pause state
  const { isPlaying } = useEvent(player, 'playingChange', {
    isPlaying: player.playing,
  });

  // Toggle play/pause on tap
  const handlePress = () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={{ height, justifyContent: 'center', alignItems: 'center' }}>
        <VideoView
          style={{ width: '100%', height: '90%' }}
          player={player}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const Samples = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const playersRef = useRef([]);

  // Handle autoplay when swiping
  const handleViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const newIndex = viewableItems[0].index;
      setCurrentIndex(newIndex);

      playersRef.current.forEach((player, index) => {
        if (player) {
          index === newIndex ? player.play() : player.pause();
        }
      });
    }
  };

  return (
    <View className="bg-black flex-1">
      {/* Video container */}
      <View className="flex-1 justify-center "> 
        <FlatList
          data={SamplesData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <VideoItem item={item} index={index} currentIndex={currentIndex} />
          )}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          onViewableItemsChanged={handleViewableItemsChanged}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        />
      </View>
    </View>
  );
};

export default Samples;