import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { TextInput, View } from 'react-native';
import { UIButton, UIText } from '../../ui';
import { createUserSchema } from '../helpers/schema.ts';
import { useCreateUser } from '../hooks/useCreateUser.ts';
import { IUserCreateForm } from '../types';
import { styles } from './CreateUserForm.style';

const CreateUserForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserCreateForm>({
    resolver: yupResolver(createUserSchema),
  });

  const createUser = useCreateUser();

  const onSubmit = (data: IUserCreateForm) => {
    createUser(data);
  };

  return (
    <View style={styles.container}>
      <UIText style={styles.label}>Name</UIText>
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            style={styles.input}
            onChangeText={onChange}
            placeholder="Enter your name"
            placeholderTextColor={styles.placeholder.color}
          />
        )}
      />
      {errors.name && (
        <UIText style={styles.error}>{errors.name.message}</UIText>
      )}

      <UIText style={styles.label}>Email</UIText>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            style={styles.input}
            onChangeText={onChange}
            placeholder="Enter your email"
            keyboardType="email-address"
            placeholderTextColor={styles.placeholder.color}
          />
        )}
      />
      {errors.email && (
        <UIText style={styles.error}>{errors.email.message}</UIText>
      )}

      <UIText style={styles.label}>Phone</UIText>
      <Controller
        name="phone"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            style={styles.input}
            onChangeText={onChange}
            value={value?.toString()}
            placeholder="Enter your phone"
            placeholderTextColor={styles.placeholder.color}
          />
        )}
      />
      {errors.phone && (
        <UIText style={styles.error}>{errors.phone.message}</UIText>
      )}

      <UIButton
        name="Create User"
        disabled={!!Object.values(errors).length}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default CreateUserForm;
