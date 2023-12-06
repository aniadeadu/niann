import { m_bags } from "./men/m_bags";
import { m_shoes } from "./men/m_shoes";
import { m_wears } from "./men/m_wears";
import { w_bags } from "./women/w_bags";
import { w_shoes } from "./women/w_shoes";
import { w_wears } from "./women/w_wears";

export const all_products = [
   ...m_bags,
   ...m_shoes,
   ...m_wears,
   ...w_bags,
   ...w_shoes,
   ...w_wears
]