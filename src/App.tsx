import { Todos } from './components/todo/Todos';
import { Container } from './components/ui/Container/Container';

function App() {
    return (
        <div className='App'>
            <Container>
                <Todos />
            </Container>
        </div>
    );
}

export default App;
