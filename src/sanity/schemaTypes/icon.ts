import { defineField } from 'sanity';
import IconSearch from "../components/IconSearch";

export default defineField({
  name: 'icon',
  title: 'Icon',
  type: 'string',
  components: {
    input: IconSearch
  },
});