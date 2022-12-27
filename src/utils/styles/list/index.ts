import { spacing } from '../../props';

export function listReset() {
  return `
    list-style: none;
    padding: 0;
    margin: 0;
  `;
}

// ul, ol {
//   &:first-child {
//     ${spacing({ theme, my: 1 })}
//   }
// }
export function unorderedList({ theme }) {
  return `

    ${listReset()}
    margin: 16px 0;

    > li {
      padding: 4px 0 4px 44px;
      text-indent: 0;
      position: relative;
      
      &:first-of-type {
        padding: 0px 0 4px 44px;
      }
      
      &:last-of-type {
        padding: 4px 0 0px 44px;
      }

      p {
        ${spacing({ theme, my: 1 })}
      }
    }

    > li::before {
      position: absolute;
      display: inline-block;
      text-align: center;
      content: '•';
      font-family: 'sans-serif';
      font-size: 1.1em;
      color: ${theme.colors.element.secondary};
      text-indent: 0;
      left: 16px;
    }

    li ul li::before {
      content: '-';
      font-size: 1.5rem;
      font-family: 'sans-serif';
    }
  `;
}
