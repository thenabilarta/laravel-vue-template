<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Example Component</div>

          <div class="card-body">I'm an example component.</div>

          <example-component-2></example-component-2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExampleComponent2 from "./ExampleComponent2.vue";
export default {
  components: { ExampleComponent2 },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
