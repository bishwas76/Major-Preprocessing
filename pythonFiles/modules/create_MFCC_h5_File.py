from modules.mfcc import mfcc
from modules.audio_file_load import original_signal_process

def create_mfcc_h5_for_dataframe(df, normalized=False):
    count = 0
    print("Progress:")
    print("[", end =" ")
    for i in df["fileName"]:
        sig = original_signal_process()
        signal, sr = sig.load_signal(i)
        calculate_mfcc_obj = mfcc()
        if normalized:
            signal = sig.z_score_normalization()
        calculate_mfcc_obj.calculate_all_mfcc(y=signal, save_to_file=True, unique_id=i)
        count += 1
        percent_completed = (count/df.shape[0])*100
        if int(percent_completed) % 2 == 0:
            print('-',end =" ")
    print(']')