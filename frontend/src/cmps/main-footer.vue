<template>
  <footer class="main-footer">&copy; {{ currYear }} Instayul by Yulia Alexeev</footer>
</template>

<script>
export default {
  data() {
    return {
      currYear: new Date().getFullYear()
    }
  },
}
</script>