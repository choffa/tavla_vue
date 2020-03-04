
export const getLineColor = (line, presentation) => {
  const [operator, , number] = line.split(':');

  switch (operator) {
    case 'RUT':
      return getRuterColor(number, presentation);
    case 'KOL':
      return getKolumbusColor(number, presentation);
    case 'ATB':
      return getAtBColor(number, presentation);
    default:
      return presentation;
  }

};

const getRuterColor = (number, presentation) => {
  switch (number) {
    case '1':
      return {
        colour: '0073db',
        textColour: 'ffffff'
      };
    case '2':
      return {
        colour: 'EC700C',
        textColour: 'ffffff'
      };
    case '3':
      return {
        colour: 'a85fa5',
        textColour: 'ffffff'
      };
    case '4':
      return {
        colour: '004a98',
        textColour: 'ffffff'
      };
    case '5':
      return {
        colour: '32aa35',
        textColour: 'ffffff'
      };
    default:
      return presentation;
  }
};

const getKolumbusColor = (number, presentation) => {
  switch (number) {
    case '2900_245':
    case '2900_246':
    case '2900_247':
      return {
        colour: 'ffffff',
        textColour: '000000'
      }

    default:
      return presentation.colour ? presentation : {
        colour: '4a8618',
        textColour: 'ffffff'
      }
  }
};

const getAtBColor = (number, presentation) => {
  if (presentation.colour) return presentation;

  number = number.split('_')[1];
  if (number <= 3) {
    return {
      colour: '37424a',
      textColour: 'ffffff'
    }
  } else if (number <= 100) {
    return {
      colour: 'a1ad00',
      textColour: '000000'
    }
  } else {
    return {
      colour: '007c92',
      textColour: 'ffffff'
    }
  }

}
