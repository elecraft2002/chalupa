import * as prismicH from "@prismicio/helpers";
const parseDate = (prismicDate) => {
   const date = prismicH.asDate(prismicDate)
   return `${date.getDate()}. ${date.getMonth()+1}. ${date.getFullYear()}`
};
export default parseDate