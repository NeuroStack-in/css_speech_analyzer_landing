## CSS SPEECH ANALYZER 

## _Application Features Overview_ 

## **Introduction** 

CSS SPEECH ANALYZER is a Flutter-based cross-platform application for comprehensive speech recording, analysis, visualization, and medical imaging integration. It is designed for linguistics researchers, speech therapists, language learning professionals, medical practitioners, and students of phonetics. The application runs on Android, iOS, Windows, Linux, and macOS, with a landscape-oriented UI optimized for visualizing speech data. 

## **1. Multi-Language Speech Recognition** 

The application integrates the Vosk offline speech recognition engine with three preloaded language models, enabling accurate transcription without requiring an internet connection. 

- **English (US):** vosk-model-small-en-us-0.15 for American English speech recognition. 

- **English (Indian):** vosk-model-small-en-in-0.4 tuned for Indian English accents. 

- **Hindi:** vosk-model-small-hi-0.22 for native Hindi speech recognition. 

- **Word-Level Synchronization:** Precise alignment between audio playback and transcribed text. 

- **Extensible Model System:** Architecture supports adding additional language models. 

## **2. Advanced Audio Processing** 

The audio engine combines high-quality recording with flexible import and conversion capabilities powered by FFmpeg. 

- **High-Quality Recording:** Direct microphone capture with pause and resume controls. 

- **Multi-Format Import:** Supports MP3, WAV, M4A, and PCM input files. 

- **FFmpeg Integration:** Built-in audio conversion and processing pipeline. 

- **Real-Time Waveform:** Live waveform visualization during recording and playback. 

## **3. Sophisticated Analysis Tools** 

A suite of interactive visualization and measurement tools enables detailed examination of speech characteristics. 

- **Pitch Analysis:** Visualizes pitch contours across a 0-500 Hz range. 

- **Intensity Analysis:** Displays loudness/intensity patterns from -60 to 0 dB. 

- **Customizable Ranges:** Adjustable analysis parameters for focused inspection. 

- **Timeline Selection:** Precise selection of audio segments for targeted analysis. 

- **Word-Level Navigation:** Jump directly to specific words in the transcription. 

## **4. Medical Imaging Integration** 

A dedicated viewer brings medical imaging into the same workspace as speech analysis, supporting research that correlates speech production with physiological structures. 

- **MRI/CT Viewer:** View medical imaging data alongside speech analysis tools. 

- **DICOM Support:** Compatible with the industry-standard DICOM medical format. 

- **Standard Image Formats:** Also supports common formats including JPG and PNG. 

- **Zoom and Pan:** Interactive controls for exploring image details. 

## **5. User-Centric Design** 

- **Intuitive Interface:** Clean, modern UI built on Material Design principles. 

- **Responsive Layout:** Optimized for landscape orientation with adaptive components. 

- **Visual Feedback:** Animated elements (Rive) and progress indicators. 

- **Comprehensive Help:** Built-in instructions and contextual information. 

## **Application Modules** 

- **Splash:** Application entry point and initialization screen. 

- **Home:** Recording controls and recorded-file management. 

- **Play Recordings:** Playback, transcription, and full analysis workspace. 

- **MRI Imaging:** DICOM/MRI/CT viewer with zoom and pan tools. 

- **About:** Documentation, credits, and help content. 

## **Key Technologies** 

- **fl_chart:** Interactive charts for pitch and intensity visualization. 

- **ffmpeg_kit_flutter_full:** Audio decoding, encoding, and conversion. 

- **vosk_flutter_2:** Offline speech recognition. 

- **audio_waveforms:** Real-time waveform rendering. 

- **rive:** High-quality interactive animations. 

- **ed_dicom_viewer:** Medical imaging (DICOM) display. 

- **permission_handler:** Runtime permission management. 

- **file_picker / path_provider:** File selection and storage path resolution. 

## **Practical Applications** 

- **Academic Research:** Phonetic studies, comparative linguistics, and sociolinguistic research. 

- **Clinical Use:** Speech therapy assessment, disorder diagnosis, and rehabilitation tracking. 

- **Education:** Pronunciation training, language learning, and phonetics instruction. 

- **Medical Research:** Correlation of speech patterns with physiological structures. 

## **Security and Privacy** 

Speech recognition runs entirely on-device using local Vosk models, so audio and transcription data are never uploaded to a remote server. Microphone and storage permissions are managed through granular runtime prompts, and no unnecessary network transmission of sensitive data takes place. 

_Developed by Mohammed Asfar under the guidance of Prof. Chander Shekhar Singh, Department of Linguistics, Rajdhani College, University of Delhi._ 

