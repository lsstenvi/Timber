package com.example.timber.ui.profile;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.fragment.app.Fragment;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.lifecycle.ViewModelProvider;

import com.example.timber.R;
import com.example.timber.model.ProfileData;

public class ProfileViewFragment extends Fragment {

    private ProfileData profileData;

    public ProfileViewFragment(ProfileData profileData) {
        this.profileData = profileData;
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater,
                             @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {

        ProfileViewModel profileViewModel = new ViewModelProvider(this, new ProfileViewModel.Factory(profileData)).get(ProfileViewModel.class);
        View root = inflater.inflate(R.layout.fragment_profile_view, container, false);

        final TextView nameTextView = root.findViewById(R.id.nameTextView);
        profileViewModel.getDisplayName().observe(getViewLifecycleOwner(), nameTextView::setText);
        final TextView descTextView = root.findViewById(R.id.descTextView);
        profileViewModel.getDescription().observe(getViewLifecycleOwner(), descTextView::setText);

        return root;
    }


}