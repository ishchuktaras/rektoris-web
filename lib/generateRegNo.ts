type SponsorshipType = 'PS' | 'SS'; // PS = Private Sponsored, SS = Sponsored Student

interface RegNumberOptions {
    schoolCode?: string;
    sponsorshipType: SponsorshipType;
    sequence: number;
}

export function generateStudentRegNumber(p0: string, p1: string, p2: number, options: RegNumberOptions): string {
  const {
    schoolCode = "PS",
    sponsorshipType,
    sequence
  } = options;

    // Validate school code (must be 2 letters)
    if (!/^[A-Z]{2}$/.test(schoolCode)) {
        throw new Error('School code must be exactly 2 uppercase letters');
    }

    // Validate sequence number (must be between 1 and 9999)
    if (options.sequence < 1 || options.sequence > 9999) {
        throw new Error('Sequence must be between 1 and 9999');
    }

    // Get current year
    const currentYear = new Date().getFullYear();

    // Pad sequence number with leading zeros to always have 4 digits
    const paddedSequence = options.sequence.toString().padStart(4, '0');

    // Construct registration number
    return `${options.schoolCode}/${options.sponsorshipType}/${currentYear}/${paddedSequence}`;
}

// Example usage:
const regNumber = generateStudentRegNumber("SD", "PS", 123, {
    schoolCode: "SD",    // Science department
    sponsorshipType: "PS", // Private Sponsored
    sequence: 123        // Will be padded to 0123
});

// Output: CS/PS/2025/0123

// Error handling example:
try {
    const invalidRegNumber = generateStudentRegNumber("CSE", "PS", 123, {
        schoolCode: "CSE",    // Invalid - more than 2 letters
        sponsorshipType: "PS",
        sequence: 123
    });
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error('An unknown error occurred');
    }
}