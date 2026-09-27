function ambil(id) {
    const el = document.getElementById(id);
    return el ? Number(el.value) || 0 : 0;
}

function prosesTabel(v1, v2, v3, b1, b2, b3) {
    let a = v1, b = v2, c = v3;
    while (a >= b1) { a -= b1; b += 1; }
    while (b >= b2) { b -= b2; c += 1; }
    while (c >= b3) { c -= b3; }
    return [a, b, c];
}

function tampil(id, nilai) {
    const el = document.getElementById(id);
    if (el) el.textContent = nilai;
}

function hitungSemua() {
    // ===== AL AUJ =====
    const aujQ = ambil('auj_p_q') + ambil('auj_s_q');
    const aujJd = ambil('auj_p_jd') + ambil('auj_s_jd');
    const aujJ = ambil('auj_p_j') + ambil('auj_s_j');
    tampil('auj_jml_q', aujQ);
    tampil('auj_jml_jd', aujJd);
    tampil('auj_jml_j', aujJ);
    const [aQ, aJd, aJ] = prosesTabel(aujQ, aujJd, aujJ, 60, 30, 12);
    tampil('auj_hasil_q', aQ);
    tampil('auj_hasil_jd', aJd);
    tampil('auj_hasil_j', aJ);

    // ===== AL MARKAZ =====
    const mrkQ = ambil('mrk_p_q') + ambil('mrk_s_q') + ambil('mrk_b_q');
    const mrkJd = ambil('mrk_p_jd') + ambil('mrk_s_jd') + ambil('mrk_b_jd');
    const mrkJ = ambil('mrk_p_j') + ambil('mrk_s_j') + ambil('mrk_b_j');
    tampil('mrk_jml_q', mrkQ);
    tampil('mrk_jml_jd', mrkJd);
    tampil('mrk_jml_j', mrkJ);
    const [mQ, mJd, mJ] = prosesTabel(mrkQ, mrkJd, mrkJ, 60, 30, 12);
    tampil('mrk_hasil_q', mQ);
    tampil('mrk_hasil_jd', mJd);
    tampil('mrk_hasil_j', mJ);

    // ===== AL KHASSAH =====
    const khspQ = ambil('khsp_p_q') + ambil('khsp_s_q') + ambil('khsp_b_q');
    const khspJd = ambil('khsp_p_jd') + ambil('khsp_s_jd') + ambil('khsp_b_jd');
    const khspJ = ambil('khsp_p_j') + ambil('khsp_s_j') + ambil('khsp_b_j');
    tampil('khsp_jml_q', khspQ);
    tampil('khsp_jml_jd', khspJd);
    tampil('khsp_jml_j', khspJ);
    const [kpQ, kpJd, kpJ] = prosesTabel(khspQ, khspJd, khspJ, 60, 30, 12);
    tampil('khsp_hasil_q', kpQ);
    tampil('khsp_hasil_jd', kpJd);
    tampil('khsp_hasil_j', kpJ);

    // ===== AL KHOSOH =====
    const khsQ = ambil('khs_p_q') + ambil('khs_s_q') + ambil('khs_b_q');
    const khsJd = ambil('khs_p_jd') + ambil('khs_s_jd') + ambil('khs_b_jd');
    const khsJ = ambil('khs_p_j') + ambil('khs_s_j') + ambil('khs_b_j');
    tampil('khs_jml_q', khsQ);
    tampil('khs_jml_jd', khsJd);
    tampil('khs_jml_j', khsJ);
    const [khQ, khJd, khJ] = prosesTabel(khsQ, khsJd, khsJ, 60, 30, 12);
    tampil('khs_hasil_q', khQ);
    tampil('khs_hasil_jd', khJd);
    tampil('khs_hasil_j', khJ);

    // ===== AL ALAMAH =====
    const almQ = ambil('alm_p_q') + ambil('alm_s_q') + ambil('alm_b_q');
    const almJam = ambil('alm_p_jam') + ambil('alm_s_jam') + ambil('alm_b_jam');
    const almHari = ambil('alm_p_hari') + ambil('alm_s_hari') + ambil('alm_b_hari');
    tampil('alm_jml_q', almQ);
    tampil('alm_jml_jam', almJam);
    tampil('alm_jml_hari', almHari);
    const [alQ, alJam, alHari] = prosesTabel(almQ, almJam, almHari, 60, 24, 7);
    tampil('alm_hasil_q', alQ);
    tampil('alm_hasil_jam', alJam);
    tampil('alm_hasil_hari', alHari);
}

function kosongkan() {
    document.querySelectorAll('input').forEach(i => {
        if (i.id.includes('_s_')) i.value = '0';
        else if (i.closest('.baris-bulan')) return;
        else i.value = '';
    });
    document.querySelectorAll('.baris-jumlah td, .baris-hasil td').forEach(el => {
        if (el.textContent !== '') el.textContent = '0';
    });
}