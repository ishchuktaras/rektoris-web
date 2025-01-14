type SponsorshipType = 'PS' | 'SS'; // PS = Private Sponsored, SS = Sponsored Student

function generateUniqueSequence(): number {
    // Use the last 4 digits of the current timestamp to generate a unique sequence
    const timestamp = Date.now();
    const sequence = timestamp % 10000;
    return sequence;
  }

  export interface RegNumberOptions {
    schoolCode: string;
    sponsorshipType: 'PS' | 'SS';
    sequence?: number;
  }
  
  export function generateStudentRegNumber(options: RegNumberOptions): string {
    // Validate school code is exactly 2 uppercase letters
    if (!/^[A-Z]{2}$/.test(options.schoolCode)) {
      throw new Error('School code must be exactly 2 uppercase letters');
    }
  
    // Validate sponsorship type
    if (!['PS', 'SS'].includes(options.sponsorshipType)) {
      throw new Error('Invalid sponsorship type. Must be either PS or SS');
    }
  
    const sequence = options.sequence || generateUniqueSequence();
    const paddedSequence = sequence.toString().padStart(4, '0');
    const year = new Date().getFullYear();
  
    return `${options.schoolCode}/${options.sponsorshipType}/${year}/${paddedSequence}`;
  }