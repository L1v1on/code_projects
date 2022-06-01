package dna_sequence;

/* 
 *   Class determines if DNA strand contains a protein.
 *   A protein has these qualities:
 *     1. Begins with start codon: "ATG"
 *     2. Ends with stop codon: "TGA"
 *     3. Between start and stop codons are additional codons.
 *     4. Codons are a sequence of 3 nucleotides
 */

public class DNA {
     final private static String dnaStrand1 = "ATGCGATACGCTTGA";
     final private static String dnaStrand2 = "ATGCGATACGTGA";
     final private static String dnaStrand3 = "ATTAATATGTACTGA";
    public static void main(String[] args) {

        // -. .-. .-. .-. .
        // \ \ / \ \ /
        // / \ \ / \ \
        // ~ `-~ `-` `-~ `-

        String dna = dnaStrand1; // hold reference to any strand
        System.out.println(dna.length());
    }

}