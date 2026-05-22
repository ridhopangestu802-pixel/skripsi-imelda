const { run, get, all } = require('../db');
const { v4: uuidv4 } = require('uuid');

const calculateScore = (answers) => {
  const scoreMap = {
    'SS (Sangat Setuju)': 5,
    'S (Setuju)': 4,
    'N (Netral)': 3,
    'TS (Tidak Setuju)': 2,
    'STS (Sangat Tidak Setuju)': 1
  };
  
  let totalScore = 0;
  let count = 0;
  
  answers.forEach(answer => {
    if (scoreMap[answer]) {
      totalScore += scoreMap[answer];
      count++;
    }
  });
  
  return count > 0 ? (totalScore / count).toFixed(2) : 0;
};

const submitResponse = async (req, res) => {
  try {
    const {
      nama,
      umur,
      jenis_kelamin,
      media_sosial_per_hari,
      platform_favorit,
      frekuensi_beli,
      answers
    } = req.body;

    // Split answers into X (marketing) and Y (purchase decision)
    const answerX = answers.slice(0, 12); // Marketing questions
    const answerY = answers.slice(12); // Purchase decision questions

    const skor_x = calculateScore(answerX);
    const skor_y = calculateScore(answerY);

    await run(
      `INSERT INTO responden (
        nama, umur, jenis_kelamin, media_sosial_per_hari, 
        platform_favorit, frekuensi_beli, skor_x, skor_y, jawaban_json
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        nama,
        umur,
        jenis_kelamin,
        media_sosial_per_hari,
        platform_favorit,
        frekuensi_beli,
        skor_x,
        skor_y,
        JSON.stringify(answers)
      ]
    );

    res.json({
      success: true,
      message: 'Respons berhasil disimpan!',
      data: { skor_x, skor_y }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const getResponses = async (req, res) => {
  try {
    const responses = await all(`
      SELECT * FROM responden ORDER BY created_at DESC
    `);
    res.json({ success: true, data: responses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getResponseById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await get(
      'SELECT * FROM responden WHERE id = ?',
      [id]
    );
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getCount = async (req, res) => {
  try {
    const result = await get('SELECT COUNT(*) as count FROM responden');
    res.json({ success: true, count: result.count });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  submitResponse,
  getResponses,
  getResponseById,
  getCount
};