<script>
  let count = 0;
  const increment = () => { count += 1 };
  const decrement = () => { if(count > 0) count -= 1 };
</script>

<div style="margin-top: 1rem; padding: 1rem; border: 1px solid #ddd; border-radius: 8px; max-width: 300px;">
  <h3 style="margin-top: 0">Simulasi Pemilihan Tiket</h3>
  <p>Tiket dipilih: <strong>{count}</strong></p>
  <div style="display: flex; gap: 10px;">
    <button on:click={decrement}>-</button>
    <button on:click={increment}>+</button>
  </div>
  <p style="font-size: 0.8rem; color: #666; margin-top: 10px;">
    <i>Dirender secara interaktif menggunakan Svelte (Islands).</i>
  </p>
</div>
