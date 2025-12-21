document.addEventListener('DOMContentLoaded', function() {
  
  const analyzeBtn = document.getElementById('analyzeBtn');
  const resultsSection = document.getElementById('resultsSection');
  const diagnosisResults = document.getElementById('diagnosisResults');
  const xrayInput = document.getElementById('xrayInput');
  const reportInput = document.getElementById('reportInput');

  analyzeBtn.addEventListener('click', function() {
    // Simulate AI analysis (fake data for now)
    analyzeBtn.textContent = 'Analyzing...';
    analyzeBtn.disabled = true;

    setTimeout(() => {
      // Fake AI results (replace with real API later)
      const diagnosis = {
        primary: 'Pneumonia',
        confidence: 87,
        severity: 'Moderate',
        treatment: ['Azithromycin 500mg daily', 'Rest + hydration', 'Follow-up in 48 hours']
      };

      // Show results
      resultsSection.classList.remove('hidden');
      
      diagnosisResults.innerHTML = `
        <div class="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500/40 rounded-2xl p-8 mb-6">
          <h3 class="text-2xl font-bold text-red-300 mb-2">Primary Diagnosis</h3>
          <div class="text-4xl font-black text-red-400 mb-2">${diagnosis.primary}</div>
          <div class="text-xl text-red-200">Confidence: <span class="font-bold text-red-300">${diagnosis.confidence}%</span></div>
        </div>

        <div class="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-2 border-blue-500/40 rounded-2xl p-6 mb-6">
          <h3 class="text-xl font-bold text-blue-300 mb-3">Recommended Treatment</h3>
          <ul class="text-lg text-blue-200 space-y-2">
            ${diagnosis.treatment.map(item => `<li>• ${item}</li>`).join('')}
          </ul>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="bg-green-500/20 border border-green-500/40 rounded-xl p-4 text-center">
            <div class="text-2xl font-bold text-green-400">${diagnosis.severity}</div>
            <div class="text-sm text-green-300">Severity</div>
          </div>
          <div class="bg-yellow-500/20 border border-yellow-500/40 rounded-xl p-4 text-center">
            <div class="text-2xl font-bold text-yellow-400">Monitor</div>
            <div class="text-sm text-yellow-300">Progress</div>
          </div>
        </div>
      `;

      // Reset button
      analyzeBtn.textContent = '🔬 Analyze → Get Diagnosis';
      analyzeBtn.disabled = false;
    }, 2000);
  });

});
