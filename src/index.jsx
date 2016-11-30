module.exports = () => (context) => {
  const {
    React,
  } = context;

  return {
    recordTypes: {
      propagation: {
        serviceConfig: {
          name: 'propagations',
        },
        messageDescriptors: {
          recordNameTitle: {
            id: 'record.propagation.nameTitle',
            description: 'The name of the record when used as a title.',
            defaultMessage: 'Propagation',
          },
        },
        forms: {
          default: <div/>,
        },
        title: () => '',
      },
    },
  };
};
