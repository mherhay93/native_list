import { useState } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { TextInput, View } from 'react-native';
import { IconButton, UIText } from '../index.ts';
import { styles } from './EditableText.style.ts';

interface IEditableText {
  text: string;
  customStyles?: StyleProp<TextStyle>;
  onSave: (key: string, value: string) => void;
}

const EditableText = ({ text, customStyles, onSave }: IEditableText) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(text);
  const [savedText, setSavedText] = useState('');

  const handleEdit = (val: boolean) => {
    setIsEdit(val);
  };

  const handleChange = (val: string) => {
    setValue(val);
  };

  const handleSave = () => {
    handleEdit(false);
    setSavedText(value);
    onSave('phone', value);
  };

  return !isEdit ? (
    <View style={styles.container}>
      <UIText style={customStyles}>{savedText || text}</UIText>
      <IconButton
        onPress={() => handleEdit(true)}
        icon={require('../../../assets/icons/EditIcon.png')}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <TextInput
        style={customStyles}
        onChangeText={handleChange}
        value={value}
      />
      <IconButton
        onPress={handleSave}
        icon={require('../../../assets/icons/SaveIcon.png')}
      />
    </View>
  );
};

export default EditableText;
