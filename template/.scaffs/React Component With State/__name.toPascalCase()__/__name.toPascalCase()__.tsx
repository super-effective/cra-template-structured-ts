import { useState } from 'react';
import styles from './<%= name.toPascalCase() %>.module.scss';

const <%= name.toPascalCase() %> = () => {
  const [state, setState] = useState<string>('');

  return (
    <div className={styles.<%= name.toSnakeCase() %>}>
      <%= name %>
      {state}
    </div>
  );
};

export default <%= name.toPascalCase() %>;
