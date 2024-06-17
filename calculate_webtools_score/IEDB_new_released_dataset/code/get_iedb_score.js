const axios = require('axios');

async function getIedbScore() {
    try {
        const response = await axios.post('https://nextgen-tools.iedb.org/pipeline/649f224d-60b5-4fff-82ad-af511885ec38', {
            "pipeline_id": "649f224d-60b5-4fff-82ad-af511885ec38",
            "pipeline_title": "",
            "email": "",
            "run_stage_range": [
              1,
              1
            ],
            "stages": [
              {
                "stage_display_name": "T-Cell Prediction",
                "stage_number": 1,
                "stage_type": "prediction",
                "tool_group": "mhci",
                "input_sequence_text": "DLNTSAGFPYV\nLLMEKEDYHSL\nELPDEFVVVTV\nEILDITPCSFG\nEAAGIGILTVI",
                "input_parameters": {
                  "alleles": "HLA-A*02:01",
                  "peptide_length_range": [
                    11,
                    11
                  ],
                  "predictors": [
                    {
                      "type": "binding",
                      "method": "netmhcpan_ba"
                    },
                    {
                      "type": "binding",
                      "method": "ann"
                    },
                    {
                      "type": "binding",
                      "method": "smmpmbec"
                    },
                    {
                      "type": "binding",
                      "method": "smm"
                    },
                    {
                      "type": "binding",
                      "method": "mhcflurry"
                    }
                  ]
                },
                "table_state": {
                  "columns": {}
                }
              }
            ]
          });

        // Process the response data
        const predictionResult = response.data;

        // Do something with the prediction result
        console.log(predictionResult);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getIedbScore();