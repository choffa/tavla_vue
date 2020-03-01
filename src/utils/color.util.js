
export const getLineColor = (line, presentation) => {
  const [operator, , number] = line.split(':');

  switch (operator) {
    case 'RUT':
      return getRuterColor(number, presentation);
    case 'KOL':
      return getKolumbusColor(number, presentation);
    default:
      return presentation;
  }

};

const getRuterColor = (number, presentation) => {
  switch (number) {
    case '1':
      return {
        colour: '0073DB',
        textColour: 'FFFFFF'
      };
    case '2':
      return {
        colour: 'EC700C',
        textColour: 'FFFFFF'
      };
    case '3':
      return {
        colour: 'A85FA5',
        textColour: 'FFFFFF'
      };
    case '4':
      return {
        colour: '004A98',
        textColour: 'FFFFFF'
      };
    case '5':
      return {
        colour: '32AA35',
        textColour: 'FFFFFF'
      };
    default:
      return presentation;
  }
};

const getKolumbusColor = (number, presentation) => {
  switch (number) {
    case '2900_245':
    case '2900_247':
      return {
        colour: 'FFFFFF',
        textColour: '000000'
      }

    default:
      return presentation.colour ? presentation : {
        colour: '4A8618',
        textColour: 'FFFFFF'
      }
  }
}
