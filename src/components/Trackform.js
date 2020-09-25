import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
const Trackform = () => {
  const {
    state: { name, locations, recording },
    startrecording,
    stoprecording,
    changeName,
  } = useContext(LocationContext);
  console.log(locations.length);
  const [saveTrack] = useSaveTrack();
  return (
    <>
      <Spacer>
        <Input
          placeholder='Enter Name'
          onChangeText={changeName}
          value={name}
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title='Stop' onPress={stoprecording} />
        ) : (
          <Button title='Start Recording' onPress={startrecording} />
        )}
      </Spacer>
      {!recording && locations.length ? (
        <Button title='Save Recording' onPress={saveTrack} />
      ) : null}
    </>
  );  
};

export default Trackform;
