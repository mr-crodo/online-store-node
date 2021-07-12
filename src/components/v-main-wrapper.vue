<template>
  <div class="v-main-wrapper">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "v-main-wrapper",
  //TODO: sdes naxodatsa deti
  components: {
  },
  //TODO: ne personalnie dannie komponenta/ sdes naxoditsa to cto budet priletat
  //TODO: iz komponenta roditela
  props: {},
  //TODO: data doljna ctoto vozvrawat/ personalnie dannie naweqo komponenta
  data() {
    return{
      title: 'Main wrapper Qadan alaram ay brat'
    }
  },
  //TODO: eto vicislitelnie svoystva komponenta
  computed: {},
  //TODO: cliki/ pokaz modalnix okon, skritie i zapusk animaciy / otlavlivaet deystvie polzovateley
  methods: {},
//TODO:  sledit za vsem
  watch: {},
  //TODO: huki
  mounted() {
    console.log('Hello i am al')
  }

}
</script>

<style scoped>
.v-main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}

</style>