import ControlledInput from '@src/components/ControlledInput';
import { Input } from 'antd';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

type TestForm = {
  randomInput: string;
};

const HomePage: FC = () => {
  const { control, watch } = useForm<TestForm>();

  const watchRandomInput = watch('randomInput');

  return (
    <>
      Home page!
      <p>Your Input: {watchRandomInput}</p>
      <ControlledInput control={control} name='randomInput'>
        <Input />
      </ControlledInput>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
    </>
  );
};
export default HomePage;
