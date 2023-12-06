import SearchTPL from "../../../components/ui/SearchTPL";

export const wears = [
   new SearchTPL (
       "wears women",  '/shopping/women/wears', 
  ),
  new SearchTPL (
       "wears men",  '/shopping/men/wears', '' 
   ),
  new SearchTPL (
        "dresses",  '', ''
   ),
   new SearchTPL (
     "tops",  '/shopping/women/wears#tops', ''
   ), 
   new SearchTPL (
       "jackets in women",  '/shopping/women/wears#wjackets', ''
   ),
   new SearchTPL (
      '006', "jackets in men",  '/shopping/men/wears/jackets/:ProductId', ''
  ),
  new SearchTPL (
      '007',  "blazer",  '', ''
   ),
  new SearchTPL (
      '008',  "skirts",  '', ''
   ),
   new SearchTPL (
      '009',  "blouson",  '', ''
   ), 
   new SearchTPL (
      '010',  "trench",  '', ''
   ), 
   new SearchTPL (
      '004',  "trouser",  '', ''
   ) 
]