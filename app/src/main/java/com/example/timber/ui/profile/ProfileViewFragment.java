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

class ProfileViewFragment extends Fragment {

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater,
                             @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {

        ProfileViewModel profileViewModel = new ViewModelProvider(this).get(ProfileViewModel.class);
        View root = inflater.inflate(R.layout.fragment_profile_view, container, false);

        final TextView nameTextView = root.findViewById(R.id.nameTextView);
        profileViewModel.getDisplayName().observe(getViewLifecycleOwner(), nameTextView::setText);
        final TextView descTextView = root.findViewById(R.id.descTextView);
        profileViewModel.getDescription().observe(getViewLifecycleOwner(), descTextView::setText);

        return root;
    }


}