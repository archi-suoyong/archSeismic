import react from 'react';
import reactDOM from 'react-dom';

function sayHello() {
    return <div>hello</div>
}

reactDOM.render(<sayHello />, document.getElementById('root'));