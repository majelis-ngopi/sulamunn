// ============== DATA ==============
const puluhan = {
    "1430": { alamah: [3,2,4], hissoh: [11,28,33], khossoh: [1,8,13], markaz: [6,25,10], auj: [3,12,26] },
    "1440": { alamah: [4,18,9], hissoh: [2,19,3], khossoh: [8,16,13], markaz: [3,7,50], auj: [3,12,34] },
    "1450": { alamah: [6,10,14], hissoh: [5,9,33], khossoh: [3,24,13], markaz: [11,20,30], auj: [3,12,42] },
    "1460": { alamah: [1,2,19], hissoh: [8,0,3], khossoh: [11,2,13], markaz: [8,3,10], auj: [3,12,50] },
    "1470": { alamah: [2,18,24], hissoh: [10,20,33], khossoh: [6,10,13], markaz: [4,15,50], auj: [3,12,58] },
    "1480": { alamah: [4,10,29], hissoh: [1,11,3], khossoh: [1,18,13], markaz: [0,28,30], auj: [3,12,6] },
    "1490": { alamah: [6,2,34], hissoh: [4,1,33], khossoh: [8,26,13], markaz: [9,11,10], auj: [3,12,14] },
    "1500": { alamah: [0,18,39], hissoh: [6,22,3], khossoh: [4,4,13], markaz: [5,23,50], auj: [3,12,22] }
};

const satuan = {
    "1": { alamah: [4,8,48], hissoh: [0,8,3], khossoh: [10,9,48], markaz: [11,19,16], auj: [0,0,0] },
    "2": { alamah: [1,17,36], hissoh: [0,16,6], khossoh: [8,19,36], markaz: [11,8,32], auj: [0,0,2] },
    "3": { alamah: [6,2,25], hissoh: [0,24,9], khossoh: [6,29,24], markaz: [10,27,48], auj: [0,0,2] },
    "4": { alamah: [3,11,14], hissoh: [1,2,12], khossoh: [5,9,12], markaz: [10,17,4], auj: [0,0,3] },
    "5": { alamah: [7,20,2], hissoh: [1,10,15], khossoh: [3,19,0], markaz: [10,6,20], auj: [0,0,4] },
    "6": { alamah: [5,4,11], hissoh: [1,18,18], khossoh: [1,28,48], markaz: [9,25,36], auj: [0,0,5] },
    "7": { alamah: [2,13,39], hissoh: [1,26,21], khossoh: [0,8,36], markaz: [9,14,52], auj: [0,0,6] },
    "8": { alamah: [6,22,28], hissoh: [2,4,24], khossoh: [10,18,24], markaz: [9,4,8], auj: [0,0,6] },
    "9": { alamah: [4,7,16], hissoh: [2,12,27], khossoh: [8,28,12], markaz: [8,23,24], auj: [0,0,7] },
    "10": { alamah: [1,16,5], hissoh: [2,20,30], khossoh: [7,8,0], markaz: [8,12,40], auj: [0,0,8] },
    "100": { alamah: [1,16,50], hissoh: [2,24,35], khossoh: [0,19,50], markaz: [0,6,40], auj: [0,0,1] },
    "200": { alamah: [3,9,41], hissoh: [5,19,10], khossoh: [1,9,40], markaz: [0,13,20], auj: [0,0,2] }
};

const bulan = {
    "1": { alamah: [0,0,0], hissoh: [0,0,0], khossoh: [0,0,0], markaz: [0,0,0], auj: [0,0,0] },
    "2": { alamah: [1,12,44], hissoh: [1,0,40], khossoh: [0,25,49], markaz: [0,29,6], auj: [0,0,0] },
    "3": { alamah: [3,1,28], hissoh: [2,1,20], khossoh: [1,21,38], markaz: [1,28,13], auj: [0,0,0] },
    "4": { alamah: [4,14,12], hissoh: [3,2,1], khossoh: [2,17,26], markaz: [2,27,19], auj: [0,0,0] },
    "5": { alamah: [6,2,56], hissoh: [4,2,41], khossoh: [3,13,16], markaz: [3,26,26], auj: [0,0,0] },
    "6": { alamah: [7,15,40], hissoh: [5,3,21], khossoh: [4,9,5], markaz: [4,25,32], auj: [0,0,0] },
    "7": { alamah: [2,4,24], hissoh: [6,4,1], khossoh: [5,4,55], markaz: [5,24,38], auj: [0,0,0] },
    "8": { alamah: [3,17,8], hissoh: [7,4,24], khossoh: [6,0,43], markaz: [6,23,45], auj: [0,0,0] },
    "9": { alamah: [5,5,52], hissoh: [8,5,22], khossoh: [6,26,32], markaz: [7,22,51], auj: [0,0,0] },
    "10": { alamah: [6,18,36], hissoh: [9,6,3], khossoh: [7,22,1], markaz: [8,21,57], auj: [0,0,0] },
    "11": { alamah: [1,7,20], hissoh: [10,6,43], khossoh: [8,18,10], markaz: [9,21,4], auj: [0,0,0] },
    "12": { alamah: [2,20,4], hissoh: [11,7,23], khossoh: [9,13,59], markaz: [10,20,10], auj: [0,0,0] }
};

// ========== FUNGSI KOREKSI ==========
function koreksiAlamah(h, j, m) {
    // Data masuk: [Hari, Jam, Menit] → dihitung
    while (m >= 60) { m -= 60; j += 1; }
    while (m < 0) { m += 60; j -= 1; }
    while (j >= 24) { j -= 24; h += 1; }
    while (j < 0) { j += 24; h -= 1; }
    while (h < 0) h += 7;
    h = h % 7;
    return [h, j, m]; // [Hari, Jam, Menit]
}

function koreksiBDM(b, d, m) {
    while (m >= 60) { m -= 60; d += 1; }
    while (m < 0) { m += 60; d -= 1; }
    while (d >= 30) { d -= 30; b += 1; }
    while (d < 0) { d += 30; b -= 1; }
    while (b < 0) b += 12;
    b = b % 12;
    return [b, d, m];
}

// ========== FUNGSI TAMPILKAN BDM: M → D → B ==========
function tampilBDM(pref, dataP, dataS, dataB) {
    const [pb, pd, pm] = dataP;
    const [sb, sd, sm] = dataS;
    const [bb, bd, bm] = dataB;

    document.getElementById(`${pref}_p_m`).textContent = pm;
    document.getElementById(`${pref}_p_d`).textContent = pd;
    document.getElementById(`${pref}_p_b`).textContent = pb;
    document.getElementById(`${pref}_s_m`).textContent = sm;
    document.getElementById(`${pref}_s_d`).textContent = sd;
    document.getElementById(`${pref}_s_b`).textContent = sb;
    document.getElementById(`${pref}_b_m`).textContent = bm;
    document.getElementById(`${pref}_b_d`).textContent = bd;
    document.getElementById(`${pref}_b_b`).textContent = bb;

    const sumM = pm + sm + bm;
    const sumD = pd + sd + bd;
    const sumB = pb + sb + bb;

    document.getElementById(`${pref}_sum_m`).textContent = sumM;
    document.getElementById(`${pref}_sum_d`).textContent = sumD;
    document.getElementById(`${pref}_sum_b`).textContent = sumB;

    const [rb, rd, rm] = koreksiBDM(sumB, sumD, sumM);
    document.getElementById(`${pref}_res_m`).textContent = rm;
    document.getElementById(`${pref}_res_d`).textContent = rd;
    document.getElementById(`${pref}_res_b`).textContent = rb;
}

// ========== HITUNG UTAMA ==========
function hitung() {
    const pKey = document.getElementById("tahunPuluhan").value;
    const sKey = document.getElementById("tahunSatuan").value;
    const bKey = document.getElementById("bulan").value;

    const p = pKey ? puluhan[pKey] : { alamah:[0,0,0], hissoh:[0,0,0], khossoh:[0,0,0], markaz:[0,0,0], auj:[0,0,0] };
    const s = sKey ? satuan[sKey] : { alamah:[0,0,0], hissoh:[0,0,0], khossoh:[0,0,0], markaz:[0,0,0], auj:[0,0,0] };
    const b = bKey ? bulan[bKey] : { alamah:[0,0,0], hissoh:[0,0,0], khossoh:[0,0,0], markaz:[0,0,0], auj:[0,0,0] };

    // === AUJ ===
    tampilBDM("au", p.auj, s.auj, b.auj);

    // === MARKAZ ===
    tampilBDM("m", p.markaz, s.markaz, b.markaz);

    // === KHOSSOH ===
    tampilBDM("k", p.khossoh, s.khossoh, b.khossoh);

    // === HISSOH ===
    tampilBDM("h", p.hissoh, s.hissoh, b.hissoh);

    // === ALAMAH — URUTAN: M → J → H ===
    const [ph, pj, pm] = p.alamah; // [Hari, Jam, Menit]
    const [sh, sj, sm] = s.alamah;
    const [bh, bj, bm] = b.alamah;

    // Tampilkan: Menit dulu, lalu Jam, lalu Hari
    document.getElementById("a_pm").textContent = pm;
    document.getElementById("a_pj").textContent = pj;
    document.getElementById("a_ph").textContent = ph;
    document.getElementById("a_sm").textContent = sm;
    document.getElementById("a_sj").textContent = sj;
    document.getElementById("a_sh").textContent = sh;
    document.getElementById("a_bm").textContent = bm;
    document.getElementById("a_bj").textContent = bj;
    document.getElementById("a_bh").textContent = bh;

    // Jumlah
    const sumM = pm + sm + bm;
    const sumJ = pj + sj + bj;
    const sumH = ph + sh + bh;
    document.getElementById("a_summ").textContent = sumM;
    document.getElementById("a_sumj").textContent = sumJ;
    document.getElementById("a_sumh").textContent = sumH;

    // Hasil akhir
    const [rh, rj, rm] = koreksiAlamah(sumH, sumJ, sumM);
    document.getElementById("a_res_m").textContent = rm;
    document.getElementById("a_res_j").textContent = rj;
    document.getElementById("a_res_h").textContent = rh;
}
