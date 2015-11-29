
function init_data(){
inputData= {
	"create_project":"mkdir -p " +  getValue('create_project_path') + "/" +  getValue('create_project_name') +
	 "/{input,backup} && cd "+getValue('create_project_path') + getValue('create_project_name')	+" && touch {"+
	 getValue('create_project_name')+"_commands.txt,log.txt}"
,
"project_details":{"project_name":getValue('create_project_name'),"project_path":getValue('create_project_path')}
,"validate_mapping_file":"validate_mapping_file.py -m " +  getValue('validate_mapping_file-m') + " -o " +  getValue('validate_mapping_file-o') + " "
,"convert_fastaqual_fastq":"convert_fastaqual_fastq.py -q " +  getValue('convert_fastaqual_fastq-q') + " -o " +  getValue('convert_fastaqual_fastq-o') + " "
,"extract_barcodes":"extract_barcodes.py -c " +  getValue('extract_barcodes-c') + " --bc1_len " +  getValue('extract_barcodes--bc1_len') + " -o " +  getValue('extract_barcodes-o') + " "
,"split_libraries_fastq":"split_libraries_fastq.py -i " +  getValue('split_libraries_fastq-i') + " -b " +  getValue('split_libraries_fastq-b') + " -m " +  getValue('split_libraries_fastq-m') + " --barcode_type " +  getValue('split_libraries_fastq--barcode_type') + " -o " +  getValue('split_libraries_fastq-o') + " "
,"identify_chimeric_seqs":"identify_chimeric_seqs.py -i " +  getValue('identify_chimeric_seqs-i') + " -m " +  getValue('identify_chimeric_seqs-m') + " -o " +  getValue('identify_chimeric_seqs-o') + " -r " +  getValue('identify_chimeric_seqs-r') + " "
,"filter_fasta":"filter_fasta.py -s " +  getValue('filter_fasta-s') + " -o " +  getValue('filter_fasta-o') + " "
,"pick_open_reference_otus":"pick_open_reference_otus.py -i " +  getValue('pick_open_reference_otus-i') + " -r " +  getValue('pick_open_reference_otus-r') + " -o " +  getValue('pick_open_reference_otus-o') + " "
,"pick_closed_reference_otus":"pick_closed_reference_otus.py -i " +  getValue('pick_closed_reference_otus-i') + " -t " +  getValue('pick_closed_reference_otus-t') + " -r " +  getValue('pick_closed_reference_otus-r') + " -o " +  getValue('pick_closed_reference_otus-o') + " "
,"single_rarefaction":"single_rarefaction.py -i " +  getValue('single_rarefaction-i') + " -o " +  getValue('single_rarefaction-o') + " -d " +  getValue('single_rarefaction-d') + " "
,"sort_otu_table":"sort_otu_table.py -i " +  getValue('sort_otu_table-i') + " -o " +  getValue('sort_otu_table-o') + " "
,"filter_samples_from_otu_table":"filter_samples_from_otu_table.py -i " +  getValue('filter_samples_from_otu_table-i') + " -o " +  getValue('filter_samples_from_otu_table-o') + " -m " +  getValue('filter_samples_from_otu_table-m') + " -s " +  getValue('filter_samples_from_otu_table-s') + " --output_mapping_fp " +  getValue('filter_samples_from_otu_table--output_mapping_fp') + " "
,"alpha_rarefaction":"alpha_rarefaction.py -i " +  getValue('alpha_rarefaction-i') + " -o " +  getValue('alpha_rarefaction-o') + " -m " +  getValue('alpha_rarefaction-m') + " -p " +  getValue('alpha_rarefaction-p') + " -t " +  getValue('alpha_rarefaction-t') + " "
,"alpha_diversity":"alpha_diversity.py -i " +  getValue('alpha_diversity-i') + " -m " +  getValue('alpha_diversity-m') + " -o " +  getValue('alpha_diversity-o') + " "
,"beta_diversity_through_plots":"beta_diversity_through_plots.py -i " +  getValue('beta_diversity_through_plots-i') + " -o " +  getValue('beta_diversity_through_plots-o') + " -m " +  getValue('beta_diversity_through_plots-m') + " -t " +  getValue('beta_diversity_through_plots-t') + " "
,"make_2d_plots":"make_2d_plots.py -i " +  getValue('make_2d_plots-i') + " -m " +  getValue('make_2d_plots-m') + " -o " +  getValue('make_2d_plots-o') + " "
,"summarize_taxa_through_plots":"summarize_taxa_through_plots.py -i " +  getValue('summarize_taxa_through_plots-i') + " -m " +  getValue('summarize_taxa_through_plots-m') + " -o " +  getValue('summarize_taxa_through_plots-o') + " "
,"compare_categories":"compare_categories.py --method " +  getValue('compare_categories--method') + " -i " +  getValue('compare_categories-i') + " -m " +  getValue('compare_categories-m') + " -c " +  getValue('compare_categories-c') + " -o " +  getValue('compare_categories-o') + " "
,
"biom_summarize-table":"biom summarize-table -i " +  getValue('biom_summarize-table-i') + " -o " +  getValue('biom_summarize-table-o') + "  "
}
}

function getValue(id){
var data = document.getElementById(id).value ;
return data;

}

init_data();
// console.log(inputData)

