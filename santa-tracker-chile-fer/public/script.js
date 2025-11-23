async function loadSanta() {
  const res = await fetch('/api/santa/state');
  const data = await res.json();
  document.getElementById("status").textContent = data.status;
  document.getElementById("distance").textContent = "Distancia NORAD: " + data.norad_distance_km + " km";
  document.getElementById("santaIndex").textContent = "Índice de Santa: " + data.santa_index;
  document.getElementById("temp").textContent = "Temperatura: " + data.temperature + " °C";
  document.getElementById("light").textContent = "Luz: " + data.ldr;
  document.getElementById("motion").textContent = "Movimiento (PIR): " + data.motion;
  document.getElementById("sound").textContent = "Sonido: " + data.sound;
  document.getElementById("vibration").textContent = "Vibración: " + data.vibration;
  document.getElementById("tcrt").textContent = "TCRT5000: " + data.tcrt;
  document.getElementById("buzzer").textContent = "Buzzer: " + data.buzzer;
  document.getElementById("led").textContent = "LED: " + data.led;
}
setInterval(loadSanta, 2000);
loadSanta();
