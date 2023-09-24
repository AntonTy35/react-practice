import { nanoid } from 'nanoid';
import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
import { useSelector } from 'react-redux';
import { getTodos, getRegime, getDeletedTodos } from 'redux/selectors';
// import { useState } from 'react';
import { switchRegimes } from 'redux/reducers';
import { REGIMES } from 'constants/constants';

export const App = () => {
  // const [regime, setRegime] = useState(REGIMES.ACTUAL);

  const todos = useSelector(getTodos);
  const deletedTodos = useSelector(getDeletedTodos);

  const regime = useSelector(getRegime);

  const getVisualTodos = () => {
    switch (regime) {
      case REGIMES.ACTUAL:
        return todos;
      case REGIMES.DELETED:
        return deletedTodos;

      default:
        break;
    }
  };

  const onSwitchRegime = () => {
    console.log(REGIMES.DELETED);
    switch (regime) {
      case REGIMES.ACTUAL:
        switchRegimes(REGIMES.DELETED);
        break;
      case REGIMES.DELETED:
        switchRegimes(REGIMES.ACTUAL);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          <button
            type="button"
            style={{ padding: '30px' }}
            onClick={onSwitchRegime}
          >
            {regime === REGIMES.ACTUAL ? 'Actual todos' : 'Deleted todos'}
          </button>

          {getVisualTodos().length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {getVisualTodos().length > 0 &&
              getVisualTodos().map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo id={todo.id} text={todo.text} counter={index + 1} />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
