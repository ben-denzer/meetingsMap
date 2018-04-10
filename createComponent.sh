#!/bin/bash

NAME=$1
ROOT=./src/components

mkdir ${ROOT}/${NAME}
touch ${ROOT}/${NAME}/${NAME}.tsx
touch ${ROOT}/${NAME}/${NAME}Styles.ts
touch ${ROOT}/${NAME}/${NAME}.test.tsx

# Create SFC
cat > ${ROOT}/${NAME}/${NAME}.tsx << EOL
import * as React from 'react';
import { ${NAME}Wrapper } from './${NAME}Styles';

interface Props {}

const ${NAME}: React.SFC<Props> = (props: Props) => {
  return (
    <${NAME}Wrapper>${NAME} Component</${NAME}Wrapper>
  );
};

export default ${NAME};
EOL

# Create Styles File
cat > ${ROOT}/${NAME}/${NAME}Styles.ts << EOL
import styled from 'styled-components';

export const ${NAME}Wrapper = styled.div\`

\`;
EOL

# Create Test File
cat > ${ROOT}/${NAME}/${NAME}.test.tsx << EOL
import * as React from 'react';
import { shallow } from 'enzyme';
import ${NAME} from './${NAME}';

describe('${NAME}', () => {
  it('should render without crashing', () => {
    shallow(<${NAME} />);
  });
});
EOL
