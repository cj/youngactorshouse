import { NAVIGATION } from '~/store/navigation'

export default {
  computed: {
    navigation () {
      return this.$store.getters[NAVIGATION]('main')
    }
  }
}
