import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addDeletedTodo,
  deleteTodo,
  deleteDeletedTodo,
  addTodo,
} from 'redux/reducers';
import { getRegime } from 'redux/selectors';
import { REGIMES } from 'constants/constants';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();

  const regime = useSelector(getRegime);

  const onDelete = () => {
    switch (regime) {
      case REGIMES.ACTUAL:
        dispatch(deleteTodo(id));
        dispatch(addDeletedTodo({ text, counter, id }));
        break;
      case REGIMES.DELETED:
        dispatch(deleteDeletedTodo(id));
        dispatch(addTodo({ text, counter, id }));
        break;

      default:
        break;
    }
  };
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={onDelete}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
