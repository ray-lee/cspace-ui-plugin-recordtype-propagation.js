module.exports = () => (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  return {
    recordTypes: {
      propagation: {
        serviceConfig: {
          serviceName: 'Propagations',
          servicePath: 'propagations',
          serviceType: 'procedure',

          objectName: 'Propagation',
          documentName: 'propagations',
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
