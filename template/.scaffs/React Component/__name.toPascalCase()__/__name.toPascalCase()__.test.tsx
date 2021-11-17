import ReactDOM from 'react-dom';
import <%= name.toPascalCase() %> from './<%= name.toPascalCase() %>';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<<%= name.toPascalCase() %> />, div);
  ReactDOM.unmountComponentAtNode(div);
});
