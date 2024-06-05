document.addEventListener('DOMContentLoaded', function() {
    const tips = [
        "Stay hydrated throughout your workout.",
        "Warm up before and cool down after your workout.",
        "Consistency is key to achieving your fitness goals.",
        "Mix up your workouts to keep them interesting.",
        "Incorporate strength training into your routine to build muscle and increase metabolism.",
        "Remember to stretch after your workouts to improve flexibility and reduce muscle soreness.",
        "Set realistic fitness goals and track your progress to stay motivated.",
        "Eating a balanced diet is crucial for fitness success. Fuel your body with the right nutrients.",
        "Stay consistent with your workouts, but don't be afraid to try new exercises to keep things interesting.",
        "Listen to your body and rest when needed to prevent overtraining and injuries.",
        "Hydration is key, especially before, during, and after intense workouts.",
        "Incorporate functional movements into your routine to improve balance and coordination.",
        "High-Intensity Interval Training (HIIT) can be a time-efficient way to burn calories.",
        "Find a workout buddy to keep you accountable and make exercising more fun.",
        "Setting small, achievable milestones can help keep you motivated on your fitness journey.",
        "Don't neglect mental health; mindfulness and meditation can enhance your physical fitness regime.",
        "A good night's sleep is just as important as regular workouts for achieving fitness goals.",
        "Incorporate active recovery days into your routine to keep your body moving without overexertion.",
        "Remember, fitness is a personal journey. Focus on what works best for you and your body."
    ];

    const tipsContainer = document.getElementById('tipsContainer');
    tips.forEach(tip => {
        const tipElement = document.createElement('div');
        tipElement.classList.add('tip');
        tipElement.textContent = tip;
        tipsContainer.appendChild(tipElement);
    });

    let currentTipIndex = Math.floor(Math.random() * tips.length);
    tipsContainer.children[currentTipIndex].classList.add('active');

    function showTip(index) {
        tipsContainer.children[currentTipIndex].classList.remove('active');
        currentTipIndex = (index + tips.length) % tips.length;
        tipsContainer.children[currentTipIndex].classList.add('active');
    }

    document.getElementById('prevTip').addEventListener('click', () => showTip(currentTipIndex - 1));
    document.getElementById('nextTip').addEventListener('click', () => showTip(currentTipIndex + 1));
});






