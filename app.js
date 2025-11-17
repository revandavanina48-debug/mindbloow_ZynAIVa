function calculateScore() {
    let q1 = parseInt(document.getElementById("q1").value);
    let q2 = parseInt(document.getElementById("q2").value);
    let q3 = parseInt(document.getElementById("q3").value);

    let score = q1 + q2 + q3;
    let result = "";

    if (score <= 1) result = "Kondisimu terlihat stabil, tetap jaga pola hidup sehat ya 🙂";
    else if (score <= 3) result = "Kamu mungkin sedang merasa tertekan. Coba istirahat & lakukan hal yang kamu suka 🌿";
    else result = "Sepertinya kamu sedang tidak baik-baik saja. Cobalah berbicara dengan seseorang yang kamu percaya 💛";

    document.getElementById("result").innerText = result;
}

function respondAI() {
    let text = document.getElementById("userInput").value.toLowerCase();
    let output = "";

    if (text.includes("sedih") || text.includes("down")) {
        output = "Aku ikut merasakan apa yang kamu rasakan. Tidak apa-apa untuk merasa sedih. Kamu hebat karena bertahan sejauh ini.";
    } 
    else if (text.includes("capek") || text.includes("lelah")) {
        output = "Kelelahan itu wajar. Tubuh dan pikiranmu butuh istirahat. Tidak harus kuat setiap saat 🙂";
    }
    else if (text.includes("sendiri")) {
        output = "Kamu tidak sendirian. Ada banyak orang yang peduli padamu, termasuk aku di sini untuk mendengarkan.";
    }
    else {
        output = "Terima kasih sudah berbagi. Kamu boleh cerita lebih banyak kapan pun.";
    }

    document.getElementById("aiResponse").innerText = output;
}
