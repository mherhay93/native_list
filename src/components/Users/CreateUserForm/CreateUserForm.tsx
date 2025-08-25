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
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.name && (
        <UIText style={styles.error}>{errors.name.message}</UIText>
      )}

      <UIText style={styles.label}>Email</UIText>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && (
        <UIText style={styles.error}>{errors.email.message}</UIText>
      )}

      <UIText style={styles.label}>Phone</UIText>
      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your phone"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value?.toString()}
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
