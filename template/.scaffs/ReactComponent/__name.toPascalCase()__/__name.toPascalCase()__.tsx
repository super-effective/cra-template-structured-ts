import styles from './<%= name.toPascalCase() %>.module.scss';

const <%= name.toPascalCase() %> = () => {
  const test = 'Test';

  return (
    <div className={styles.<%= name.toSnakeCase() %>}>
      <%= name %>
      {test}
    </div>
  );
};

export default <%= name.toPascalCase() %>;
