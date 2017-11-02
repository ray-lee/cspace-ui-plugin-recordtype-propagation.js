module.exports = () => (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  return {
    recordTypes: {
      propagation: {
        serviceConfig: {
          name: 'propagations',
        },
        messages: {
          name: {
            id: 'record.propagation.name',
            defaultMessage: 'Propagation',
          },
          collectionName: {
            id: 'record.propagation.collectionName',
            defaultMessage: 'Propagations',
          },
        },
        forms: {
          default: <div />,
        },
        title: () => '',
      },
    },
  };
};
