const fs = require('fs');
const path = require('path');

// Files that need the import
const files = [
  'src/Components/About.jsx',
  'src/Components/BusinessSchoolOfLeadershipExcellence.jsx',
  'src/Components/CoffeeWithDrRakhudu.jsx',
  'src/Components/Contact.jsx',
  'src/Components/Divisions.jsx',
  'src/Components/HakemEnergiesFoundation.jsx',
  'src/Components/Home.jsx',
  'src/Components/InvestmentSustainabilityTrust.jsx',
  'src/Components/KgosanaKoketsoRakhuduGroup.jsx',
  'src/Components/KgosanaKoketsoRakhuduProfile.jsx',
  'src/Components/KoketsoRakhuduFoundation.jsx',
  'src/Components/Leadership.jsx',
  'src/Components/LoadingWarthog.jsx',
  'src/Components/ResponsiveLogo.jsx',
  'src/Components/VillageEconomyIndaba.jsx',
  'src/DivisionSites/Kgotla/pages/About.jsx',
  'src/DivisionSites/Kgotla/pages/Heritage.jsx',
];

const importStatement = "import { getPublicImage } from '../shared/utils/assetPaths';";
const kgotlaImportStatement = "import { getDivisionImage } from '../../../shared/utils/assetPaths';";

files.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping ${filePath} - file not found`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  const isKgotla = filePath.includes('Kgotla');
  const importToAdd = isKgotla ? kgotlaImportStatement : importStatement;
  const functionName = isKgotla ? 'getDivisionImage' : 'getPublicImage';

  // Check if file uses the function
  if (!content.includes(functionName)) {
    console.log(`Skipping ${filePath} - doesn't use ${functionName}`);
    return;
  }

  // Check if import already exists
  if (content.includes(importToAdd)) {
    console.log(`Skipping ${filePath} - import already exists`);
    return;
  }

  // Add import after the first import statement
  const lines = content.split('\n');
  let insertIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('import ')) {
      insertIndex = i + 1;
      // Find the end of the import block
      while (insertIndex < lines.length && (lines[insertIndex].trim().startsWith('import ') || lines[insertIndex].trim() === '')) {
        if (lines[insertIndex].trim().startsWith('import ')) {
          insertIndex++;
        } else {
          break;
        }
      }
      break;
    }
  }

  if (insertIndex !== -1) {
    lines.splice(insertIndex, 0, importToAdd);
    content = lines.join('\n');
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✓ Added import to ${filePath}`);
  } else {
    console.log(`ERROR: Could not find import block in ${filePath}`);
  }
});

console.log('\nDone!');
