import styled from 'styled-components';
import tw from 'tailwind.macro';

const TopAlbumsStyles = styled.div.attrs({
  className: 'w-full leading-none relative mt-20',
})`
  & {
    h2 {
      ${tw`text-5xl underline font-bold mb-8`}
    }
    ul {
      ${tw`w-4/6 h-1/2 flex flex-row items-center flex-wrap -mb-56`}
    }
    li {
      ${tw`w-1/3 h-64 my-2`}
    }
    img {
      ${tw`w-11/12 h-48 rounded`}
    }
    h3 {
      ${tw`text-2xl mb-3 underline`}
    }
    span {
      ${tw`text-xl`}
    }
    button {
      ${tw`bg-gray-300 text-black font-bold py-2 px-2 my-1 rounded-full`}
    }
    button:hover {
      ${tw`bg-gray-600 text-white`}
    }

    & {
      .similarDiv {
        ${tw`w-2/6`}
      }
      .similar {
        ${tw`w-full h-auto flex flex-col items-center justify-center my-2`}
      }
      .similarLi {
        ${tw`h-8 w-full text-center`}
      }
    }
  }
`;

export default TopAlbumsStyles;
