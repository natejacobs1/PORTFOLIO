import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PERSONAL_INFO,
  PROJECTS_DATA,
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  ACHIEVEMENTS_DATA,
  SKILLS_DATA,
  filterSkills,
  isValidEmail,
  getFormattedIST
} from './portfolio-data.ts';

test('Personal info contains required resume attributes', () => {
  assert.equal(PERSONAL_INFO.name, 'ADARSH SK');
  assert.equal(PERSONAL_INFO.email, 'adarshsk128@gmail.com');
  assert.ok(PERSONAL_INFO.githubUrl.includes('natejacobs1'));
  assert.ok(PERSONAL_INFO.linkedinUrl.includes('adarshsk'));
  assert.equal(isValidEmail(PERSONAL_INFO.email), true);
  assert.equal(isValidEmail('invalid-email'), false);
});

test('Projects data includes Chesster and LIRA with complete resume tech stacks', () => {
  assert.equal(PROJECTS_DATA.length >= 2, true);
  
  const chesster = PROJECTS_DATA.find(p => p.id === 'chesster');
  assert.ok(chesster);
  assert.ok(chesster.technologies.includes('Google Gemini API'));
  assert.ok(chesster.technologies.includes('React 19'));
  assert.ok(chesster.technologies.includes('TypeScript'));

  const lira = PROJECTS_DATA.find(p => p.id === 'lira');
  assert.ok(lira);
  assert.ok(lira.technologies.includes('Leaflet'));
  assert.ok(lira.technologies.includes('GeoJSON'));
  assert.ok(lira.technologies.includes('GeoTIFF'));
  assert.ok(lira.technologies.includes('QGIS'));
});

test('Experience data includes Venu AI internship with resume bullets', () => {
  const venu = EXPERIENCE_DATA.find(e => e.company === 'Venu AI');
  assert.ok(venu);
  assert.equal(venu.role, 'Software Engineering Intern');
  assert.ok(venu.technologies.includes('Django'));
  assert.ok(venu.technologies.includes('PostgreSQL'));
  assert.ok(venu.technologies.includes('GitHub Actions'));
  assert.equal(venu.bulletPoints.length, 2);
});

test('Education data accurately records Canara Engineering College & CFAL', () => {
  const cec = EDUCATION_DATA.find(e => e.institution.includes('Canara'));
  assert.ok(cec);
  assert.equal(cec.score, '7.7 / 10');
  assert.equal(cec.period, '2023 – 2027');

  const cfal = EDUCATION_DATA.find(e => e.institution.includes('CFAL'));
  assert.ok(cfal);
  assert.equal(cfal.score, '87%');
});

test('Achievements include FOSS Hack 2025 Winner and GitHub Foundations', () => {
  const fossHack = ACHIEVEMENTS_DATA.find(a => a.title.includes('FOSS Hack 2025'));
  assert.ok(fossHack);
  assert.ok(fossHack.award?.includes('10,000'));

  const cert = ACHIEVEMENTS_DATA.find(a => a.title.includes('GitHub Foundations'));
  assert.ok(cert);
});

test('Skills filtering works across categories', () => {
  const allSkills = filterSkills(SKILLS_DATA, 'all');
  assert.equal(allSkills.length, SKILLS_DATA.length);

  const languages = filterSkills(SKILLS_DATA, 'languages');
  assert.ok(languages.some(s => s.name === 'Python'));
  assert.ok(languages.some(s => s.name === 'Java'));
  assert.ok(languages.some(s => s.name === 'SQL'));

  const gis = filterSkills(SKILLS_DATA, 'gis');
  assert.ok(gis.some(s => s.name === 'QGIS'));
  assert.ok(gis.some(s => s.name === 'GeoTIFF'));

  const cloud = filterSkills(SKILLS_DATA, 'cloud');
  assert.ok(cloud.some(s => s.name === 'Docker'));
  assert.ok(cloud.some(s => s.name === 'Kubernetes'));
  assert.ok(cloud.some(s => s.name === 'GitHub Actions'));
});

test('IST Time formatter returns valid time and daytime indicator', () => {
  const fixedMorning = new Date('2026-10-17T04:30:00Z'); // 10:00 AM IST
  const morningResult = getFormattedIST(fixedMorning);
  assert.equal(morningResult.isDaytime, true);
  assert.ok(typeof morningResult.timeString === 'string');

  const fixedNight = new Date('2026-10-17T16:30:00Z'); // 10:00 PM IST
  const nightResult = getFormattedIST(fixedNight);
  assert.equal(nightResult.isDaytime, false);
});
