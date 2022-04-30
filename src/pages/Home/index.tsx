import ControlledInput from '@src/components/ControlledInput';
import { RoutePaths } from '@src/contants';
import { Input } from 'antd';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

type TestForm = {
  randomInput: string;
};

const HomePage: FC = () => {
  const { control, watch } = useForm<TestForm>();

  const watchRandomInput = watch('randomInput');

  return (
    <>
      Home page! <Link to={RoutePaths.Page1}>Goto Page 1</Link>
      <p>Your Input: {watchRandomInput}</p>
      <ControlledInput control={control} name='randomInput'>
        <Input />
      </ControlledInput>
    </>
  );
};
export default HomePage;
