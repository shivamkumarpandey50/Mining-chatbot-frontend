document.getElementById("chatButton").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementById("welcomeMessage").innerHTML = `
        <p>Welcome to Mining ChatBot-Bot! 🚀🤖</p>
        <p>Hi there, 👋 We're excited to have you on board. This is a powerful bot designed to help you ask queries related to your data/knowledge.</p>
        <p>Happy chatting! 💻😊</p>
      `;
  }, 8000); // Display welcome message after 2 seconds

  setTimeout(function () {
    document.getElementById("welcomeMessage").innerHTML = `
        <p>Hi, Welcome to Mining Bot. What is your query?</p>
        <img src="" alt="" />
      `;
  }, 5000); // Display original message after 5 seconds
});
